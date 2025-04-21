import React, { useState } from 'react'
import "./api.css"

const Api = ({ img, text }) => {

    const data2 = [
        {
            id: 1,
            img: img,
            text1: text,
            status: true,
        },
        {
            id: 2,
            img: img,
            text1: "Bedroom",
            status: false,
        }
    ]

    const [data, setData] = useState(data2)

    const [addModal, setAddModal] = useState(false)
    const [addName, setAddname] = useState("")
    const [addImg, setaddImg] = useState("")
    const [addStatus, setAddStatus] = useState(false)

    const [EditModal, setEditModal] = useState(false)
    const [EditName, setEditname] = useState("")
    const [EditImg, setEditImg] = useState("")
    const [EditStatus, setEditStatus] = useState(false)
    const [idx, setidx] = useState(null)

    const [search, setSearch] = useState("")

    const [searchStatus, setSearchStatus] = useState("")


    const deletUser = (id) => {
        setData(data.filter((e) => e.id != id))
    }

    const Adduser = () => {
        const newUser = {
            id: Date.now(),
            img: addImg,
            text1: addName,
            status: addStatus == "true" ? true : false,
        }
        setData([...data, newUser])
        setAddModal(false)
    }

    const close = () => setAddModal(false)

    const chekUser = (id) => {
        setData(data.map((e) => {
            if (e.id == id) {
                e.status = !e.status
            }
            return e
        }))
    }

    const editUser = (e) => {
        setEditModal(true)
        setEditname(e.text1)
        setEditImg(e.img)
        setEditStatus(e.status)
        setidx(e.id)
    }

    const Edit = () => {
        setData(data.map((e) => {
            if (e.id == idx) {
                return {
                    img: EditImg,
                    text1: EditName,
                    status: EditStatus == "true" ? true : false,
                }
            }
            setEditModal(false)
            return e
        }))
    }

    const closeEdit = () => {
        setEditModal(false)
    }

    return (
        <div className='Cart'>
            <button onClick={() => setAddModal(true)}>add</button>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='search' placeholder='...search' />
            <select value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)}>
                <option value="All">All</option>
                <option value="true">Activ</option>
                <option value="false">Inactiv</option>
            </select>
            <dialog open={addModal} className='modal1'>
                <div className="modal">
                    <input type="text" value={addName} onChange={(e) => setAddname(e.target.value)} placeholder='Add img' />
                    <input type="text" value={addImg} onChange={(e) => setaddImg(e.target.value)} placeholder='Add name' />
                    <select value={addStatus} onChange={(e) => setAddStatus(e.target.value)}>
                        <option value="true">Activ</option>
                        <option value="false">Inactiv</option>
                    </select>
                    <button onClick={Adduser} className='save'>save</button>
                    <button onClick={close} className='close'>close</button>
                </div>
            </dialog>
            <dialog open={EditModal} className='modal1'>
                <div className="modal">
                    <input type="text" value={EditName} onChange={(e) => setEditname(e.target.value)} placeholder='Edit img' />
                    <input type="text" value={EditImg} onChange={(e) => setEditImg(e.target.value)} placeholder='Edit name' />
                    <select value={EditStatus} onChange={(e) => setEditStatus(e.target.value)}>
                        <option value="true">Activ</option>
                        <option value="false">Inactiv</option>
                    </select>
                    <button onClick={Edit} className='save'>save</button>
                    <button onClick={closeEdit} className='close'>close</button>
                </div>
            </dialog>
            <div className="box-Cart">
                {
                    data.filter((e) => e.text1.toLowerCase().includes(search.toLowerCase())).filter((e) => searchStatus != "All" ? e.status.toString().includes(searchStatus) : data).map((e) => {
                        return <div className='cart' key={e.id}>
                            <img className='img' src={e.img} alt="" />
                            <p className='text'>{e.text1}</p>
                            {/* <h1>{e.status?"Activ":"inactiv"}</h1> */}
                            <div className="btn-All">
                                <button onClick={() => deletUser(e.id)}>delet</button>
                                <button onClick={() => editUser(e)}>edit</button>
                                <input type="checkbox" onClick={() => chekUser(e.id)} checked={e.status} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Api
