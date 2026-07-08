const fs = require('fs');
const path = require('path');

function injectSchemas(filePath, pageName, urlPath, isService = false) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // if already contains schemas, skip
  if (content.includes('@type": "Electrician"')) return;

  const breadcrumbItems = isService 
    ? `[
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "{{ site.DOMAIN }}/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "{{ site.DOMAIN }}/services/" },
    { "@type": "ListItem", "position": 3, "name": "{{ service.title }}", "item": "{{ site.DOMAIN }}/services/{{ service.slug }}/" }
  ]`
    : `[
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "{{ site.DOMAIN }}/" },
    { "@type": "ListItem", "position": 2, "name": "${pageName}", "item": "{{ site.DOMAIN }}${urlPath}" }
  ]`;
  
  const titleVal = isService ? '{{ service.title }} - {{ site.BRAND }}' : `{{ site.BRAND }} - ${pageName}`;
  const urlVal = isService ? '{{ site.DOMAIN }}/services/{{ service.slug }}/' : `{{ site.DOMAIN }}${urlPath}`;
  
  const schemas = `

{# ——— Schemas —————————————————————————————————————————————————————————— #}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "${titleVal}",
  "url": "${urlVal}",
  "image": "{{ site.DOMAIN }}/favicon.svg",
  "telephone": "{{ site.PHONE }}",
  "priceRange": "$$"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": ${breadcrumbItems}
}
</script>
`;

  // Insert after frontmatter closing
  content = content.replace(/^---([\s\S]*?)---/, '---$1---' + schemas);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Injected schemas into', filePath);
}

const basePath = 'C:/New 25% Sites/LocalElectricianEmergency';
injectSchemas(path.join(basePath, 'src/about.njk'), 'About Us', '/about/');
injectSchemas(path.join(basePath, 'src/contact.njk'), 'Contact Us', '/contact/');
injectSchemas(path.join(basePath, 'src/services/index.njk'), 'Services', '/services/');
injectSchemas(path.join(basePath, 'src/services/services-single.njk'), 'Service', '/services/', true);

console.log('Schema injection complete.');
