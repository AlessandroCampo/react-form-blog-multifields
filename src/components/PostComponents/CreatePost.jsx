import { useEffect, useRef, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { IoMdImages } from "react-icons/io";
import { AiTwotoneEye as Eye, AiTwotoneEyeInvisible as EyeSlash } from "react-icons/ai";

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin("x");


import './post.css';
import FormSelect from "../FormSelect";

import { postCategories, tags } from "../../utils.jsx";
import { toast } from "react-toastify";

import { Checkbox, colors } from "@mui/material";


export default ({ user, setPostList, notifyError }) => {
    const postDefault = {
        id: new Date().toISOString(),
        author: user,
        content: '',
        createdAt: new Date().toISOString(),
        image: undefined,
        category: undefined,
        comments: [],
        likes: [],
        shares: [],
        visible: 'initial value'
    };


    const wrapper = useRef();
    const [postData, setPostData] = useState(postDefault);
    const [imagePreview, setImagePreview] = useState(undefined);
    const [postErrors, setPostErrors] = useState([]);

    useEffect(() => {
        if (postData.visible === 'initial value') return
        toast.success(`Your post visibility has succesfully been set to ${postData.visible ? 'visible' : 'invisible'}`)

    }, [postData.visible])


    const updatePostData = (e) => {
        const { name, type, checked, value } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        console.log(name, newValue);

        setPostData(oldValue => ({
            ...oldValue,
            [name]: newValue
        }));

        console.log(postData);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        // setPostMedia(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const createPost = (e) => {
        e.preventDefault();
        if (postData?.content.trim().length <= 0) {
            gsap.to('#createPostWrapper', {
                duration: 0.05,
                x: 10,
                repeat: 6,
                yoyo: true,
                onComplete: () => {
                    gsap.set('#createPostWrapper', { x: 0 });
                }
            });
            notifyError('Scrivi qualcosa, coglione')
            return;
        }
        setPostList(oldPostList => [...oldPostList, { ...postData }]);
        setPostData(postDefault);
        toast.success('Il tuo post è stato creato correttamente')
    }

    return (
        <form className="wrapper" ref={wrapper} id="createPostWrapper" onSubmit={createPost}>

            <div className="upper">
                <Avatar
                    sx={{ bgcolor: '#DAA520', color: 'gray', width: 48, height: 48 }}
                    alt={user?.username}
                    src="/static/images/avatar/1.jpg"

                />
                <textarea
                    value={postData.content}
                    placeholder="What's on your mind?"
                    className="h-[100px]"
                    name="content"
                    onChange={(e) => { updatePostData(e) }}
                >
                </textarea>
            </div>
            {
                imagePreview &&
                <figure
                    className="w-full h-[150px]"
                >
                    <img
                        src={imagePreview}
                        alt="post_preview"
                        className="preview"
                    />
                </figure>

            }

            <div className="usleess-fields px-4">
                <FormSelect
                    options={postCategories}
                    cb={(event) => { updatePostData(event) }}
                    name={'category'}
                />
            </div>
            <div className="useless-tags px-4">
                {
                    tags.map((t, i) => {
                        return (
                            <Checkbox
                                key={`checkbox-tag-${i}`}
                                {...t.label}
                                icon={t.icon}
                                checkedIcon={t.checkedIcon}
                                style={{ color: '#DAA520' }}

                            />
                        )

                    })
                }
            </div>
            <div className="lower">
                <div className="icons-container flex items-center gap-3">
                    <label
                        htmlFor="postPic"

                    >
                        <IoMdImages
                            className="icon-common"
                        />
                    </label>
                    <label htmlFor="visible">
                        {
                            postData.visible ?
                                <Eye className="icon-common" /> : <EyeSlash className="icon-common" />
                        }
                    </label>
                </div>

                <div className="hidden-inputs">
                    <input
                        type="checkbox"
                        name="visible"
                        id="visible"
                        checked={Boolean(postData.visible)}
                        value={postData.visible}
                        hidden
                        onChange={(e) => { updatePostData(e) }}

                    />

                    <input
                        type="file"
                        id="postPic"
                        onChange={(e) => { handleFileUpload(e) }}
                        hidden
                        accept=".jpg, .png, .jpeg"
                    />
                </div>

                <button type="submit">Publish</button>
            </div>
            {
                postErrors.length > 0 && <p className="px-6 errors-container text-red-600 font-semibold flex flex-col gap-2">
                    {
                        postErrors.map(err => {
                            return <div className="error">
                                {err}
                            </div>
                        })
                    }

                </p>
            }

        </form>
    )
};
