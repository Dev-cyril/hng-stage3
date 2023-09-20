import React, {useState} from 'react'
import '../styles/gallery.css'
import img1 from '../assests/img1.jpg'
import img2 from '../assests/img2.jpg'
import img3 from '../assests/img3.jpg'
import img4 from '../assests/img4.jpg'
import img5 from '../assests/img5.jpg'
import img6 from '../assests/img6.jpg'
import img7 from '../assests/img7.jpg'
import img8 from '../assests/img8.jpg'
import img9 from '../assests/img9.jpg'
import img10 from '../assests/img10.jpg'

export default function Gallery() {
    const [gallery, setGallery] = useState([
        {id: 1, src:img1, tag: 'nature'}, {id: 2, src:img2, tag: 'nature'},
        {id: 3, src:img3, tag: 'nature'}, {id: 4, src:img4, tag: 'nature'},
        {id: 5, src:img5, tag: 'nature'}, {id: 6, src:img6, tag: 'nature'},
        {id: 7, src:img7, tag: 'nature'}, {id: 8, src:img8, tag: 'nature'}, 
        {id: 9, src:img9, tag: 'nature'}, {id: 10, src:img10, tag: 'nature'}])

    const [searchItem, setSearchItem] = useState('')
    

    const dragStart = (e) =>{
        e.dataTransfer.setData('text/plain', e.target.id.toString())
    }

    const onDrag = (e) =>{
        e.preventDefault();
    }
    const onDrop = (e) =>{
        e.preventDefault();
        const draggedItemId = parseInt(e.dataTransfer.getData('text/plain'), 10);
        const update = [...gallery]
        const draggedItemIndex = update.findIndex((element) => element.id === draggedItemId);

        const targetId = e.target.id.toString()
        const targetItemIdIndex = update.findIndex((element) => element.id === parseInt(targetId, 10))

        if(targetItemIdIndex !== -1 && draggedItemIndex !== -1){
            const [draggedElement] = update.splice(draggedItemIndex, 1);
            console.log(draggedElement)
            update.splice(targetItemIdIndex, 0, draggedElement)
            setGallery(update)
        }
    }

    const filteredGallery = gallery.filter((element) =>
        searchItem !== '' && element.tag.includes(searchItem)
    );
  return (
    <section className='gallery'>
        <input type='text' onChange={(e) => setSearchItem(e.target.value)}/>
        {searchItem !== '' ?
            filteredGallery.map((item) => (
                <div>
                    <img src={item.src} alt={item.alt} 
                        key={item.id}
                        id={item.id.toString()}
                        className="grid-item"
                        draggable="true"
                        onDragStart={dragStart}
                        onDragOver={onDrag}
                        onDrop={onDrop}
                    />
                </div>
            )) :
            gallery.map((item) => (
                <div>
                    <img src={item.src} alt={item.alt} 
                        key={item.id}
                        id={item.id.toString()}
                        className="grid-item"
                        draggable="true"
                        onDragStart={dragStart}
                        onDragOver={onDrag}
                        onDrop={onDrop}
                    />
                </div>
            ))
        }
    </section>
  )
}
