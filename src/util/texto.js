class TextoUtil {
  static formatarValor(texto) {
    return ` R$ ${texto.toFixed(2).replace('.', ',')}`;
  }

  static formatarDataComHora(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}`;
  }

  static formatarData(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}

module.exports = TextoUtil;