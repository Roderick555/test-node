const { translate } = require('google-translate-api-browser');

function TranslateFromFrench () {
  translate("Bonjour", { to: "en" })
    .then(res => {
      // I do not eat six days
      console.log(res.text)
    })
    .catch(err => {
      console.error(err);
    });
} 