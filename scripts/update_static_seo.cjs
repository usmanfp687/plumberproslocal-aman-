const fs = require('fs');
const path = require('path');

const updates = [
  {
    file: 'src/index.njk',
    title: 'Expert Local Electricians Near You | 24/7 Emergency Repairs',
    desc: 'Need a local electrician? We provide 24/7 emergency electrical services, panel upgrades, and complete home rewiring. Call our licensed experts today!'
  },
  {
    file: 'src/about.njk',
    title: 'About Our Nationwide Network of Licensed Emergency Electricians',
    desc: 'Learn about our trusted nationwide network of licensed electricians. We specialize in fast 24/7 emergency electrical repairs and complete home wiring.'
  },
  {
    file: 'src/contact.njk',
    title: 'Contact Our Expert Electricians | 24/7 Emergency Repair Service',
    desc: 'Contact our licensed local electricians for 24/7 emergency services and electrical repairs. Call anytime or fill out our form for a fast free quote!'
  },
  {
    file: 'src/services/index.njk',
    title: 'Top Rated Professional Electrical Services | 24/7 Local Repair',
    desc: 'Explore our professional electrical services. From 24/7 emergency repairs and panel upgrades to full home rewiring, our licensed local pros can help.'
  },
  {
    file: 'src/privacy-policy.njk',
    title: 'Privacy Policy | Our Nationwide Emergency Electrical Services',
    desc: 'Review our Privacy Policy to understand how our nationwide network of licensed electricians collects, uses, and safeguards your personal information.'
  },
  {
    file: 'src/terms.njk',
    title: 'Terms of Service | Nationwide Emergency Electrical Contractors',
    desc: 'Review our Terms of Service before using our nationwide network of licensed electricians for your 24/7 emergency electrical repair and wiring needs.'
  }
];

const basePath = 'C:/New 25% Sites/LocalElectricianEmergency';

updates.forEach(u => {
  const filePath = path.join(basePath, u.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace title
    content = content.replace(/title: ".*?"/, 'title: "' + u.title + '"');
    // Replace description
    // Make sure we match description that can be multi-line or single-line if needed, but here it's single line
    content = content.replace(/description: ".*?"/, 'description: "' + u.desc + '"');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + u.file);
  } else {
    console.log('File not found: ' + u.file);
  }
});
