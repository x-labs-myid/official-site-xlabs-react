import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = ({
  placeholder,
  value,
  onChange
}: {
  placeholder?: string,
  value?: string,
  onChange?: (value: string) => void
}) => {
  const editor = useRef(null);
  const [content, setContent] = useState(value || '');

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || 'Mulai mengetik...',
      height: 400,
      buttons: 'bold,italic,underline,|,ul,ol,|,link,image,|,source',
      style: {
        // background: `oklch(25.33% 0.016 252.42)`,
        color: `gray`,
      },
    }),
    [placeholder, value]
  );

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    onChange?.(newContent);
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={handleContentChange}
        onChange={handleContentChange}
      />
    </>
  );
}

export default RichTextEditor