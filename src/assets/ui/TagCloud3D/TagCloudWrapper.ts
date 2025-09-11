
import TagCloudOriginal from "TagCloud";


export interface TagCloudOptions {
  radius?: number; 
  maxSpeed?: "slow" | "normal" | "fast";
  initSpeed?: "slow" | "normal" | "fast";
  direction?: number; 
  keep?: boolean;
  reverseDirection?: boolean;
  containerClass?: string;
  itemClass?: string;
  useContainerInlineStyles?: boolean;
  useItemInlineStyles?: boolean;
  useHTML?: boolean;
}

// Assinatura mínima para o construtor
type TagCloudFn = (
  container: string | HTMLElement | (HTMLElement | SVGElement)[],
  texts: (string | HTMLElement)[],
  options?: TagCloudOptions
) => {
  update: (texts: (string | HTMLElement)[]) => void;
  pause: () => void;
  resume: () => void;
  destroy: () => void;
};

// Fazemos o cast apenas aqui
const TagCloud = TagCloudOriginal as unknown as TagCloudFn;

export function initTagCloud(
  container: HTMLElement,
  texts: (string | HTMLElement)[],
  options?: TagCloudOptions
) {
  return TagCloud(container, texts, options);
}
