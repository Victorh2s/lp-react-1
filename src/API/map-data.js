export const mapData = (pageData = [{}]) => {
  return pageData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;
    return {
      footerHtml,
      slug,
      title,
      sections,
      menu,
    };
  });
};

// const { inspect } = require('util');
// const dados = require('./dados.json');
// console.log(inspect(mapData(dados), null, null, true));
