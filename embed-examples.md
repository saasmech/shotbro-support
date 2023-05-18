---
outline: deep
---

# Embed Example


## Local Testing

<div class="shotbro-embed" data-shotbro-loader="http://127.0.0.1:5173/embed/client-v1.js">
          <iframe src="http://127.0.0.1:5173/embed/8e034891aea82df4?streamCode=com.app.settings.my-form"
            style="width: 100%; height: 100px; border: none;color-scheme:light;"
            title="ShotBro embed" loading="lazy"></iframe>
          <script async src="http://127.0.0.1:5173/embed/client-v1.js" charset="utf-8"></script></div>

<script setup>

import {scanForEmbeds} from './shotbro-vitepress.js';
scanForEmbeds();

</script>
