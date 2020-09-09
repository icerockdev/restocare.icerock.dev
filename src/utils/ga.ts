import qs from 'query-string';

export const getUtmData = (): Record<string, string> => {
  if (!window.location.search) return {};

  const data = qs.parse(window.location.search);

  return {
    utm_source: data.utm_source?.toString() || "",
    utm_medium: data.utm_medium?.toString() || "",
    utm_campaign: data.utm_campaign?.toString() || "",
    utm_id: data.utm_content?.toString() || "",
    utm_keyword: data.utm_term?.toString() || "",
  };
};

function getCookie(name: string) {
  var matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
      '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export const getGa = () => {
  if ((window as any).ga && (window as any).ga.getAll && (window as any).ga.getAll().length) {
    return (window as any).ga.getAll()[0].get('clientId')
  }

  const cookie = getCookie('_ga')
  return cookie ? cookie.replace(/^[^\.]+\.[^\.]+\./, '') : ''
}
