import { Button, ButtonProps } from "@chakra-ui/react";

type DownloadCVButtonProps = ButtonProps;

export default function DownloadCVButton(props: DownloadCVButtonProps) {
  const handleDownload = () => {
    const fileUrl = "/khaledBaniAmerCV.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "khaledBaniAmerCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} variant={"black"} {...props}>
      DOWNLOAD CV
    </Button>
  );
}
