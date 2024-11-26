
const imageUrls = [
    imgTags
  ];
  
  
  const imgTags = imageUrls.map(url => `<img src="${url}" alt="Image" />`);
  
  
  console.log(imgTags.join("\n"));
  