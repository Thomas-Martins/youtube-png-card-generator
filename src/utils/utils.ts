export function formatDuration(duration: string): string {

  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/) ?? [];


  const hours: number = match[1] ? parseInt(match[1]) : 0;
  const minutes: number = match[2] ? parseInt(match[2]) : 0;
  const seconds: number = match[3] ? parseInt(match[3]) : 0;

  let formattedTime = "";
  if (hours > 0) {
    formattedTime += (hours < 10 ? "0" + hours : hours.toString()) + ":";
  }
  formattedTime += (minutes < 10 ? "0" + minutes : minutes.toString()) + ":";
  formattedTime += seconds < 10 ? "0" + seconds : seconds.toString();

  return formattedTime;
}

export function formatDate(dateString: string): string {
  const today = new Date();
  const date = new Date(dateString);
  const diff = Math.abs(today.getTime() - date.getTime());
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} ${years === 1 ? 'an' : 'ans'}`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? 'mois' : 'mois'}`;
  } else if (weeks > 0) {
    return `${weeks} ${weeks === 1 ? 'semaine' : 'semaines'}`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? 'jour' : 'jours'}`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'heure' : 'heures'}`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
  } else {
    return `${seconds} ${seconds === 1 ? 'seconde' : 'secondes'}`;
  }
}

export function formatViews(views: number): string {
  if (views >= 100000000) {
    return (views / 1000000) + 'M';
  } else if (views >= 1000000) {
    return (views / 1000000) + 'M';
  } else if (views >= 100000) {
    return (views / 10000).toFixed(0) + 'k';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(0) + 'k';
  } else {
    return views.toString();
  }
}