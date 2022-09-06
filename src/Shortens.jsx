import React from "react";
import {useSelector} from 'react-redux'
import {selectLinks} from './store/slices/linkSlice'
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from "react";
const Shortens = ()=>{
    const [copiedLinks, setCopiedLinks] = useState(null)
    const copyToClipboard = (link) =>{
        navigator.clipboard.writeText(link).then(()=>{
            setCopiedLinks(link);
        })
    }
    const links = useSelector(selectLinks)
    if(!links?.length) return null;
    return(
        <>
        <div className="shortens">
            {links.map(item =>(
                <AnimatePresence key={item.code}>
                <motion.div className="shortensItem" initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: "auto"}}>
                    <div className="shortensText">
                    <div>{item.original_link}</div>
                    <div>{item.full_short_link2}</div>
                    </div>
                    <button className="shortensButton" onClick={()=>copyToClipboard(item.full_short_link2)}>
                    {copiedLinks === item.full_short_link2 ? 'Copid!' : 'Copy'}
                    </button>
                </motion.div>
                </AnimatePresence>
            ))}
        </div>
        </>
    )
}
export {Shortens}