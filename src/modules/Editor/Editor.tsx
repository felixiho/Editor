/* eslint-disable */

import {
    Box, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    MenuGroup,
    Text,
    MenuDivider,
    Image,
    Button
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ClassAttributes, useEffect, useId, useRef, useState } from 'react';
import Toolbar from './Toolbar';
import { IconContext, } from "react-icons";
import { TbCrossFilled } from 'react-icons/tb';
import { BsImage, BsCameraVideoFill, BsStars } from 'react-icons/bs';
import AttachmentMenu from './AttachmentMenu';
import AddPictureModal from '@/components/AddPictureModal';
import { ReactQuillProps } from 'react-quill';
import AddVideoModal from '@/components/AddVideoModal';
import { getVideoUrl } from '@/config/utils';

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


    const modules = {
        toolbar: {
            container: "#toolbar",
            //   handlers: {
            //     insertStar: insertStar
            //   }
        },
        clipboard: {
            matchVisual: false,
        }
    };

    const handleClosePictureModal = () => {
        setShowPictureModal(false)
    }

    const handleImageEmbed = (fileUrl: string) => {
        if (!quillRef.current || !fileUrl) return
        // tslint-disable
        const quill = quillRef.current.getEditor() as unknown as any // eslint-disable
        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, "image", fileUrl);
        quill.setSelection(range.index + 1);
    }

    const handleVideoEmbed = (url: string) => {
        if (!quillRef.current || !url) return
        const quill = quillRef.current.getEditor() as unknown as any // eslint-disable
        const range = quill.getSelection(true);
        const formattedUrl = getVideoUrl(url)  
        quill.insertEmbed(range.index, "video", formattedUrl);
        quill.setSelection(range.index + 1);
    }

    return (
        <Box as="section" w="100%">
            <Box w="100%" maxW={"635px"}>
                <Toolbar />

            </Box>
            <Box w="100%">
                <ReactQuill
                    forwardedRef={quillRef}
                    modules={modules}
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

            <AddPictureModal handleImageEmbed={handleImageEmbed} isOpen={showPictureModal} onClose={handleClosePictureModal} />
            <AddVideoModal handleVideoEmbed={handleVideoEmbed} isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} />
        </Box>
    );
}

export default Editor;