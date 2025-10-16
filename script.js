
/* Data for selectProduct to save into localStorage when an image is clicked.
   Titles & descriptions. */
const jewelryData = {
  diamond:[{title:"Diamond Solitaire Necklace",desc:"A radiant solitaire pendant exuding timeless brilliance."},
           {title:"Diamond Halo Ring",desc:"Ring encircled by halo diamonds enhancing sparkle."},
           {title:"Diamond Drop Earrings",desc:"Elegant drops reflecting exquisite light and grace."},
           {title:"Diamond Tennis Bracelet",desc:"Seamless row of perfectly matched diamonds."},
           {title:"Diamond Crown",desc:"A regal crown encrusted with dazzling diamonds."},
           {title:"Diamond Pendant Locket",desc:"Locket accented with shimmering diamond facets."},
           {title:"Diamond Brooch Fleur",desc:"Floral brooch showcasing intricate diamond design."},
           {title:"Diamond Ankle Chain",desc:"Delicate chain adorned with tiny sparkling diamonds."},
           {title:"Diamond Bangle Classic",desc:"Classic bangle featuring luminous diamonds."},
           {title:"Diamond Tiara Royale",desc:"Royal tiara with scintillating diamond arrangement."},
           {title:"Diamond Hairpin Set",desc:"Subtle hairpins bringing diamond elegance to style."},
           {title:"Diamond Charm Bracelet",desc:"Bracelet with petite diamond charms for shimmer."}],
  ruby:[{title:"Ruby Statement Necklace",desc:"Bold red rubies forming a dramatic centerpiece."},
        {title:"Ruby Cabochon Ring",desc:"Smooth cabochon ruby exuding warm elegance."},
        {title:"Ruby Cluster Earrings",desc:"Clusters of rubies for vibrant brilliance."},
        {title:"Ruby Cuff Bracelet",desc:"Elegant ruby cuff showcasing luxury."},
        {title:"Ruby Sovereign Crown",desc:"Crown adorned with royal rubies."},
        {title:"Ruby Heart Pendant",desc:"Heart-shaped pendant highlighting ruby glow."},
        {title:"Ruby Vintage Brooch",desc:"Vintage brooch accented with deep red rubies."},
        {title:"Ruby Filigree Anklet",desc:"Anklet with intricate ruby filigree design."},
        {title:"Ruby Link Bangle",desc:"Linked bangle showcasing ruby radiance."},
        {title:"Ruby Coronation Tiara",desc:"Tiara fit for royal ceremonies with rubies."},
        {title:"Ruby Enamel Hairpin",desc:"Hairpin combining ruby and enamel artistry."},
        {title:"Ruby Charm Lariat",desc:"Delicate lariat charm adorned with rubies."}],
  opal:[{title:"Opal Aurora Necklace",desc:"Necklace reflecting opal’s magical hues."},
        {title:"Opal Cluster Ring",desc:"Ring highlighting opal’s iridescent colors."},
        {title:"Opal Halo Earrings",desc:"Halo earrings capturing opal’s play-of-color."},
        {title:"Opal Bead Bracelet",desc:"Beaded bracelet featuring shimmering opals."},
        {title:"Opal Dream Crown",desc:"Crown accentuated with dreamy opalescence."},
        {title:"Opal Pendant Sphere",desc:"Sphere pendant displaying opal’s mystique."},
        {title:"Opal Mosaic Brooch",desc:"Brooch with mosaic of iridescent opals."},
        {title:"Opal Ankle Ribbon",desc:"Ribbon anklet decorated with opals."},
        {title:"Opal Wave Bangle",desc:"Bangle inspired by opal’s flowing colors."},
        {title:"Opal Star Tiara",desc:"Starry tiara adorned with opal gems."},
        {title:"Opal Hair Slide",desc:"Hair slide reflecting opal’s radiant play."},
        {title:"Opal Charm Pendant",desc:"Pendant charm featuring playful opal glow."}],
  pearl:[{title:"Pearl Opera Necklace",desc:"Long necklace with lustrous pearls."},
         {title:"Pearl Solitaire Ring",desc:"Solitary pearl ring exuding elegance."},
         {title:"Pearl Drop Earrings",desc:"Graceful earrings showcasing pearls."},
         {title:"Pearl & Gold Bracelet",desc:"Bracelet blending pearls with gold."},
         {title:"Pearl Regal Crown",desc:"Crown trimmed with classic pearls."},
         {title:"Pearl Pendant Teardrop",desc:"Teardrop pendant with shimmering pearl."},
         {title:"Pearl Vintage Brooch",desc:"Vintage brooch highlighting pearl beauty."},
         {title:"Pearl Strand Anklet",desc:"Anklet featuring pearl strand elegance."},
         {title:"Pearl Cuff Bangle",desc:"Cuff bangle adorned with lustrous pearls."},
         {title:"Pearl Tiara Delicate",desc:"Delicate tiara decorated with pearls."},
         {title:"Pearl Hair Comb",desc:"Hair comb enhanced with pearls."},
         {title:"Pearl Locket Charm",desc:"Locket charm featuring a single pearl."}],
  zircon:[{title:"Zircon Radiance Necklace",desc:"Necklace featuring zircon’s clear sparkle."},
          {title:"Zircon Solitaire Ring",desc:"Solitary zircon set for brilliance."},
          {title:"Zircon Stud Earrings",desc:"Classic studs with zircon clarity."},
          {title:"Zircon Chain Bracelet",desc:"Chain bracelet with delicate zircons."},
          {title:"Zircon Ceremony Crown",desc:"Crown adorned with shimmering zircons."},
          {title:"Zircon Teardrop Pendant",desc:"Teardrop pendant showcasing zircon sparkle."},
          {title:"Zircon Pin Brooch",desc:"Brooch featuring precise zircon cuts."},
          {title:"Zircon Foot Chain",desc:"Foot chain decorated with tiny zircons."},
          {title:"Zircon Open Bangle",desc:"Open bangle highlighting zircon stones."},
          {title:"Zircon Mini Tiara",desc:"Mini tiara featuring delicate zircon gems."},
          {title:"Zircon Hair Pin",desc:"Hair pin sparkling with zircon facets."},
          {title:"Zircon Charm Anklet",desc:"Charm anklet with zircon accents."}],
  emerald:[{title:"Emerald Cascade Necklace",desc:"Necklace showcasing vivid emerald green."},
           {title:"Emerald Cushion Ring",desc:"Cushion cut ring with emerald brilliance."},
           {title:"Emerald Drop Earrings",desc:"Earrings swaying with emerald grace."},
           {title:"Emerald Woven Bracelet",desc:"Bracelet with woven emeralds for luxury."},
           {title:"Emerald Verdant Crown",desc:"Crown reflecting rich emerald tones."},
           {title:"Emerald Teardrop Pendant",desc:"Pendant emphasizing emerald’s depth."},
           {title:"Emerald Filigree Brooch",desc:"Brooch combining metalwork with emeralds."},
           {title:"Emerald Leaf Anklet",desc:"Leaf-inspired anklet with emerald accents."},
           {title:"Emerald Hinged Bangle",desc:"Hinged bangle adorned with emeralds."},
           {title:"Emerald Laurel Tiara",desc:"Tiara symbolizing growth and nobility."},
           {title:"Emerald Hair Vine",desc:"Hair vine interlaced with tiny emeralds."},
           {title:"Emerald Charm Bracelet",desc:"Charm bracelet dotted with emerald tokens."}],
  sapphire:[{title:"Sapphire Empress Necklace",desc:"Necklace exuding deep sapphire elegance."},
            {title:"Sapphire Signet Ring",desc:"Signet ring with polished sapphire depth."},
            {title:"Sapphire Cluster Earrings",desc:"Cluster earrings showcasing sapphire beauty."},
            {title:"Sapphire Linked Bracelet",desc:"Linked bracelet highlighting sapphire tone."},
            {title:"Sapphire Royal Crown",desc:"Crown with majestic sapphire arrangement."},
            {title:"Sapphire Lapis Pendant",desc:"Pendant combining sapphire with lapis hues."},
            {title:"Sapphire Cloisonné Brooch",desc:"Brooch integrating sapphire and enamel."},
            {title:"Sapphire Anklet Grace",desc:"Anklet showcasing subtle sapphire glow."},
            {title:"Sapphire Hinged Bangle",desc:"Hinged bangle featuring sapphire stones."},
            {title:"Sapphire Regency Tiara",desc:"Tiara exuding royal sapphire elegance."},
            {title:"Sapphire Hair Ornament",desc:"Hair ornament accented with sapphire."},
            {title:"Sapphire Charm Locket",desc:"Locket charm with sapphire depth."}],
  amethyst:[{title:"Amethyst Royale Necklace",desc:"Necklace woven from violet amethyst facets."},
            {title:"Amethyst Cocktail Ring",desc:"Cocktail ring with deep purple amethyst."},
            {title:"Amethyst Dangle Earrings",desc:"Dangle earrings reflecting amethyst glow."},
            {title:"Amethyst Link Bracelet",desc:"Linked bracelet showcasing amethyst beauty."},
            {title:"Amethyst Heirloom Crown",desc:"Crown featuring regal amethyst stones."},
            {title:"Amethyst Pendant Orb",desc:"Orb pendant highlighting amethyst brilliance."},
            {title:"Amethyst Floral Brooch",desc:"Brooch sculpted with amethyst floral design."},
            {title:"Amethyst Ankle Chain",desc:"Delicate ankle chain with amethyst touches."},
            {title:"Amethyst Open Bangle",desc:"Open bangle featuring violet amethyst."},
            {title:"Amethyst Crownlet",desc:"Small crownlet adorned with amethyst gems."},
            {title:"Amethyst Hair Stick",desc:"Hair stick with subtle amethyst highlights."},
            {title:"Amethyst Charm Necklace",desc:"Charm necklace with amethyst pendants."}]
};


function selectProduct(stone, index){
  const idx = index - 1;
  const list = jewelryData[stone];
  if(!list || !list[idx]) {
    // fallback
    const prod = { id: stone + '-' + index, stone, title: `${stone} Item ${index}`, desc:'', price:'N/A', img: `${stone}${index}.png` };
    localStorage.setItem('selectedProduct', JSON.stringify(prod));
    window.location.href = 'detail.html';
    return;
  }
  //  This function is used when you clicked on any product it will open its detail page in (detail.html)
  const item = list[idx];
  const prod = {
    id: stone + '-' + index,
    stone,
    title: item.title,
    desc: item.desc,
    price: (Math.random()*8+1).toFixed(2) + ' Lakh',
    img: `${stone}${index}.png`
  };
  //local storage means saves info in detail.html
  localStorage.setItem('selectedProduct', JSON.stringify(prod));
  window.location.href = 'detail.html';
}
//Add To Cart function that gives alert when clicked on add to cart button
function addToCart(title){
  alert(title + ' added to cart!');
}
 
/* Search filter by stone name like:- diamond ,ruby ,amethyst ,sapphaire,opal ,zircoin */
// Get the search input element by its ID
const searchInput = document.getElementById('searchInput');

//  Select all sections that represent stones (each has class="stone-section")
const sections = document.querySelectorAll('.stone-section');

//  When the user types in the search box, this function will run automatically
searchInput.oninput = () => {

  //  Take the text entered by the user
  // Remove extra spaces (trim) and convert to lowercase (to make search case-insensitive)
  const q = searchInput.value.trim().toLowerCase();

  //  Loop through every section (e.g., diamond, ruby, emerald)
  for (const sec of sections) {

    //  Check if:
    //   1. The search box is empty (!q)
    //   OR
    //   2. The section's ID (like "diamond") includes the text typed by the user
    // If true → show the section
    // If false → hide it
    sec.style.display = !q || sec.id.toLowerCase().includes(q) ? '' : 'none';
  }
};


  // URL se crystal name nikalna
  const params = new URLSearchParams(window.location.search);
  const selectedCrystal = params.get("crystal");

  // Saare crystal sections hide karna
  const section = document.querySelectorAll(".stone-section");
  sections.forEach(section => section.style.display = "none");

  // Sirf selected crystal ka section show karna
  if (selectedCrystal) {
    const crystalSection = document.getElementById(selectedCrystal.toLowerCase());
    if (crystalSection) {
      crystalSection.style.display = "block";
    }
  } else {
    // Agar koi parameter nahi diya gaya toh sab show kar do
    sections.forEach(section => section.style.display = "block");
  }

