export default function validateText(text: string) {
  return text.match(/^[A-Za-zА-Яа-я0-9]{2,400}$/);
}
