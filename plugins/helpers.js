export default (context, inject) => {
  const apiurl = () => {
    return process.env.API_URL
  }

  const baseurl = () => {
    return process.env.BASE_URL
  }

  const months = {
    id: {
      short: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
      full: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
        '_'
      )
    },
    en: {
      short: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Agt_Sep_Oct_Nov_Dec'.split('_'),
      full: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
      )
    }
  }

  const numPrefix = num => {
    let prefixed = num
    if (num < 10) {
      prefixed = '0' + num
    }

    return prefixed
  }

  const formatCurrentDate = (date, monthLenght = 'full', lang = 'id') => {
    const parseDate = new Date(date)
    const day = parseDate.getDate()
    const month = parseDate.getMonth()
    const year = parseDate.getFullYear()

    const monthName = months[lang][monthLenght][month]

    return `${numPrefix(day)} ${monthName} ${year}`
  }

  inject('baseurl', baseurl)
  inject('apiurl', apiurl)
  inject('formatCurrentDate', formatCurrentDate)
}
