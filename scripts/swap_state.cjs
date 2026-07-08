const fs = require('fs');
const path = require('path');

const targetFile = path.resolve('C:/New 25% Sites/LocalElectricianEmergency/src/states/state-page.njk');
let content = fs.readFileSync(targetFile, 'utf8');

// Replace whyChooseContent.p1 and p2 with safe filter
content = content.replace('<p>{{ whyChooseContent.p1 }}</p>\n          <p>{{ whyChooseContent.p2 }}</p>', '{{ whyChooseContent | safe }}');

// Define Who We Are Block
const whoWeAreBlock = `
{# ── Who We Are ────────────────────────────────────────────────────────── #}
<div class="rs-choose" style="background:var(--gray-bg)">
  <div class="container">
    <div class="choose-grid">
      <div>
        <div class="sec-title4">
          <div class="sub-line"></div>
          <span class="sub-text">
            <i class="ph ph-info" style="font-size:13px"></i>
            Who We Are
          </span>
          <h2>{{ state.name }} Electrical Pros</h2>
          
          {{ whoWeAreContent | safe }}

          <p style="margin-top:20px;">
            We serve {{ state.name }} communities with same day and 24/7 emergency electrical services.
          </p>
        </div>
        <div class="about-mini">
          <div class="mini-card">
            <h4><i class="ph ph-house-line" style="font-size:14px"></i> Residential</h4>
            <p>Full electrical services for homes and apartments in {{ state.name }}.</p>
          </div>
          <div class="mini-card">
            <h4><i class="ph ph-buildings" style="font-size:14px"></i> Commercial</h4>
            <p>Fast commercial electrical to minimize business downtime in {{ state.name }}.</p>
          </div>
        </div>
      </div>
      <div class="choose-img">
        <img src="/assets/images/bathroom-electrical-services.webp" alt="Top-rated electrical company in {{ state.name }} specializing in emergency electrical, residential, and commercial." loading="lazy">
      </div>
    </div>
  </div>
</div>
`;

// Inject Who We Are Block before Google Map
content = content.replace('{# ── Google Map ────────────────────────────────────────────────────────── #}', whoWeAreBlock + '\n{# ── Google Map ────────────────────────────────────────────────────────── #}');

fs.writeFileSync(targetFile, content, 'utf8');
console.log('State page updated successfully');
