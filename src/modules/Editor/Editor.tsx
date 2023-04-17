 
import {
    Box
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import {  useRef, useState } from 'react';
import Toolbar from './Toolbar'; 
import AttachmentMenu from './AttachmentMenu';
import AddPictureModal from '@/components/AddPictureModal';
import { ReactQuillProps } from 'react-quill';
import AddVideoModal from '@/components/AddVideoModal';
import { getVideoUrl } from '@/config/utils';
import AddSocialModal from '@/components/AddSocialModal';

type PropsQuill = ReactQuillProps & {
    forwardedRef: any
}
const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill");

        return ({ forwardedRef, ...props }: PropsQuill) => <RQ ref={forwardedRef} {...props} />;
    },
    {
        ssr: false
    }
);


const Editor = () => {
    let quillRef = useRef(null)
    const [value, setValue] = useState('')
    const [showPictureModal, setShowPictureModal] = useState(false)
    const [showVideoModal, setShowVideoModal] = useState(false)
    const [showSocialModal, setShowSocialModal] = useState(false)
 

    const handleImageEmbed = (fileUrl: string) => {
        if (!quillRef.current || !fileUrl) return 
        const current = quillRef.current as unknown as any
        const quill =  current.getEditor() 
        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, "image", fileUrl);
        quill.setSelection(range.index + 1);
    }

    const handleVideoEmbed = (url: string) => {
        if (!quillRef.current || !url) return
        const current = quillRef.current as unknown as any
        const quill =  current.getEditor()
        const range = quill.getSelection(true);
        const formattedUrl = getVideoUrl(url)
        quill.insertEmbed(range.index, "video", formattedUrl);
        quill.setSelection(range.index + 1);
    }

    const handleSocialEmbed = (url: string) => { 
    } 

    const modules = {
        toolbar: {
            container: "#toolbar",
            handlers: { 
            }
        },
        clipboard: {
            matchVisual: false,
        }
    };

    const formats = [
        'header', 'font', 'background', 'color', 'code', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'script', 'align', 'direction',
        'link', 'image', 'code-block', 'formula', 'video'
      ]

    return (
        <Box as="section" w="100%">
            <Box w="100%" maxW={"635px"}>
                <Toolbar />

            </Box>
            <Box w="100%">
                <ReactQuill
                    forwardedRef={quillRef}
                    modules={modules}
                    formats={formats}
                    style={{ border: "0" }}
                    theme="snow" value={value}
                    placeholder='Start typing'
                    onChange={setValue} />

                <AttachmentMenu
                    setShowPictureModal={setShowPictureModal}
                    setShowVideoModal={setShowVideoModal}
                    setShowSocialModal={setShowSocialModal}
                />
            </Box>

            <AddPictureModal handleImageEmbed={handleImageEmbed} isOpen={showPictureModal} onClose={() => setShowPictureModal(false)} />
            <AddVideoModal handleVideoEmbed={handleVideoEmbed} isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} />
            <AddSocialModal handleSocialEmbed={handleSocialEmbed} isOpen={showSocialModal} onClose={() => setShowSocialModal(false)} />
        </Box>
    );
}

Editor.displayName = "Editor"
export default Editor;