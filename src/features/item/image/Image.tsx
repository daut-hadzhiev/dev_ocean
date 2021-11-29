import styles from "./Image.module.css";

const small = (partialUrl: string) => `${partialUrl}jpg&h=200&w=200`;
const medium = (partialUrl: string) => `${partialUrl}jpg&h=300&w=500`;
const large = (partialUrl: string) => `${partialUrl}jpg&h=600&w=1000`;

interface ResponsiveImageProps {
  src: string;
  alt?: string;
}

export const ResponsiveImage = ({ src, alt }: ResponsiveImageProps) => {
  const cutUrl = src.slice(0, src.lastIndexOf("jpg&h="));

  return (
    <img
      className={styles.image}
      src={src}
      srcSet={`${small(cutUrl)} 300w, ${medium(cutUrl)} 768w, ${large(
        cutUrl
      )} 1280w`}
      {...(alt ? { alt } : {})}
    />
  );
};
