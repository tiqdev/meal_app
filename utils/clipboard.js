import { toast } from "react-toastify";

export const copyToClipboard = (text, info) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Metin panoya kopyalandı.");
      toast(info);
    })
    .catch((err) => {
      console.error("Metin panoya kopyalanırken bir hata oluştu: ", err);
    });
};
