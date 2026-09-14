import math, os, sys, traceback
import numpy as np, soundfile as sf
from transformers import MusicgenForConditionalGeneration, MusicgenConfig, AutoProcessor
prompt = "minimal modern tech underscore, steady mid-tempo pulse, dry industrial percussion, clean synth bass, confident and focused, no vocals, BPM 110"
out_path = "assets/bgm/track.wav"; target_s = 62.0; seed_s = 28.0; token_rate = 50; xf_s = 0.3
def fade(a, sr, fi=0.08, fo=1.5):
    ni, no = int(fi*sr), int(fo*sr)
    a[:ni] *= np.linspace(0,1,ni,dtype="float32"); a[-no:] *= np.linspace(1,0,no,dtype="float32"); return a
def loop_xf(seed, n, xf):
    t = np.linspace(0,1,xf,dtype="float32"); fo, fi = np.cos(t*math.pi/2), np.sin(t*math.pi/2)
    out = seed.copy()
    while out.shape[0] < n: out = np.concatenate([out[:-xf], out[-xf:]*fo + seed[:xf]*fi, seed[xf:]])
    return out[:n]
try:
    cfg = MusicgenConfig.from_pretrained("facebook/musicgen-small")
    processor = AutoProcessor.from_pretrained("facebook/musicgen-small")
    model = MusicgenForConditionalGeneration.from_pretrained("facebook/musicgen-small", config=cfg); model.eval()
    sr = int(model.config.audio_encoder.sampling_rate)
    print(f"[musicgen] generating seed {seed_s}s sr={sr}", flush=True)
    audio = model.generate(**processor(text=[prompt], padding=True, return_tensors="pt"), max_new_tokens=int(seed_s*token_rate))
    seed = audio[0,0].detach().cpu().numpy().astype("float32"); seed *= 0.89/max(1e-6, float(np.abs(seed).max()))
    final = fade(loop_xf(seed, int(target_s*sr), int(xf_s*sr)), sr)
    sf.write(out_path, final, sr); print(f"[musicgen] wrote {out_path} {final.shape[0]/sr:.1f}s", flush=True)
except Exception:
    traceback.print_exc(); sys.exit(1)
