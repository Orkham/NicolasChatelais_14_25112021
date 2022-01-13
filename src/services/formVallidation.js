/**
 *
 * @param {object} datas : données du formulaire à valider
 * @returns false si une des données est manquante
 */
export function checkForm(datas) {
  //console.log(datas)
  for (const prop in datas) {
    if (!datas[prop]) {
      //console.log('erreur')
      return false
    }
  }
}
