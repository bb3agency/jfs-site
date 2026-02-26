
const fs = require('fs');
const products = JSON.parse(fs.readFileSync('product_analysis.json'));

let tsOutput = 'export const PRODUCTS: Product[] = [\n';

products.forEach((p, idx) => {
    const id = 'prod-' + (idx + 1);
    tsOutput += '  {\n';
    tsOutput += '    id: \'' + id + '\',\n';
    tsOutput += '    name: \'' + p.name.replace(/'/g, \'\\\\\\'\') + '\',\n';
    tsOutput += '    brand: \'' + p.name.split(' ')[0].replace(/'/g, \'\\\\\\'\') + '\',\n';
    tsOutput += '    category: \'' + p.category + '\' as Category,\n';
    tsOutput += '    price: ' + p.selling + ',\n';
    tsOutput += '    mrp: ' + p.mrp + ',\n';
    tsOutput += '    discount: ' + p.discount + ',\n';

    if (p.images && p.images.length > 0) {
        tsOutput += '    image: img(\'' + p.images[0].replace(/'/g, \'\\\\\\'\') + '\'),\n';
        tsOutput += '    images: [\n';
        p.images.forEach(img => {
            tsOutput += '      img(\'' + img.replace(/'/g, \'\\\\\\'\') + '\'),\n';
        });
        tsOutput += '    ],\n';
    } else {
        tsOutput += '    image: \'\',\n';
    }

    tsOutput += '    description: \'Premium ' + p.category.toLowerCase() + ' supplement for optimal results.\',\n';
    tsOutput += '    isTrending: ' + (idx % 3 === 0 ? 'true' : 'false') + ',\n';

    if (p.flavours && p.flavours.length > 0) {
        tsOutput += '    flavours: [\n';
        p.flavours.forEach(flav => {
            tsOutput += '      { name: \'' + flav.name.replace(/'/g, \'\\\\\\'\') + '\', image: img(\'' + flav.image.replace(/'/g, \'\\\\\\'\') + '\') },\n';
        });
        tsOutput += '    ],\n';
    }

    tsOutput += '  },\n';
});

tsOutput += '];\n';

let dataTs = fs.readFileSync('data.ts', 'utf8');
const productsStart = dataTs.indexOf('export const PRODUCTS: Product[] = [');
const productsEnd = dataTs.indexOf('export const TESTIMONIALS: Testimonial[] = [');

if (productsStart !== -1 && productsEnd !== -1) {
    const newContent = dataTs.substring(0, productsStart) + tsOutput + '\n// ============================================================\n// TESTIMONIALS\n// ============================================================\n\n' + dataTs.substring(productsEnd);
    fs.writeFileSync('data.ts', newContent);
    console.log('Successfully injected new PRODUCTS array into data.ts');
} else {
    console.log('Could not find the bounds for PRODUCTS array in data.ts');
}

