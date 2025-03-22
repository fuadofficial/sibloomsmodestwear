import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Add = ({ token }) => {

	const navigate = useNavigate()
	const [loading, setLoading] = useState(false);

	const [image1, setImage1] = useState(null)
	const [image2, setImage2] = useState(null)
	const [image3, setImage3] = useState(null)
	const [image4, setImage4] = useState(null)

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [category, setCategory] = useState("Women")
	const [bestseller, setBestseller] = useState(false)
	const [sizes, setSizes] = useState([])
	const [sizePrices, setSizePrices] = useState({ S: "", M: "", L: "" })

	const onSubmitHandler = async (e) => {
		e.preventDefault()
		if (loading) return;
		if (sizes.length === 0) {
			toast.error("Please select at least one size.");
			return;
		}
		if (sizes.some(size => !sizePrices[size])) {
			toast.error("Please enter prices for all selected sizes.");
			return;
		}
		setLoading(true);

		try {
			const formData = new FormData()
			formData.append("name", name)
			formData.append("description", description)
			formData.append("category", category)
			formData.append("bestseller", bestseller)
			formData.append("sizes", JSON.stringify(sizes))
			formData.append("sizePrices", JSON.stringify(sizePrices))

			image1 && formData.append("image1", image1)
			image2 && formData.append("image2", image2)
			image3 && formData.append("image3", image3)
			image4 && formData.append("image4", image4)

			const response = await axios.post(backendUrl + "/api/product/add", formData, {
				headers: {
					token,
					'Content-Type': 'multipart/form-data'
				}
			})
			if (response.data.success) {
				toast.success(response.data.message)
				setName("")
				setDescription("")
				setImage1(null)
				setImage2(null)
				setImage3(null)
				setImage4(null)
				setSizes([])
				setSizePrices({ S: "", M: "", L: "" })
				navigate("/list");
			} else {
				toast.error(response.data.message)
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message)
		} finally {
			setLoading(false); 
		}
	}

	const handleSizeToggle = (size) => {
		setSizes(prev =>
			prev.includes(size)
				? prev.filter(item => item !== size)
				: [...prev, size]
		)
	}

	const handleSizePriceChange = (size, value) => {
		setSizePrices(prev => ({ ...prev, [size]: value }))
	}

	return (
		<form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
			<div>
				<p className='mb-2'>Upload Image</p>
				<div className='flex gap-2'>
					<label htmlFor="image1">
						<img className="w-20" src={`${image1 ? URL.createObjectURL(image1) : assets.upload_area}`} alt="" />
						<input required onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
					</label>
					<label htmlFor="image2">
						<img className="w-20" src={`${image2 ? URL.createObjectURL(image2) : assets.upload_area}`} alt="" />
						<input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden />
					</label>
					<label htmlFor="image3">
						<img className="w-20" src={`${image3 ? URL.createObjectURL(image3) : assets.upload_area}`} alt="" />
						<input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden />
					</label>
					<label htmlFor="image4">
						<img className="w-20" src={`${image4 ? URL.createObjectURL(image4) : assets.upload_area}`} alt="" />
						<input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' hidden />
					</label>
				</div>
			</div>
			<div className='w-full'>
				<p className='mb-2 '>Product name</p>
				<input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Type here' required />
			</div>
			<div className='w-full'>
				<p className='mb-2 '>Product description</p>
				<textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Write content here' required />
			</div>
			<div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
				<div>
					<p className='mb-2'>Product category</p>
					<select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
						<option value="Women">Women</option>
						<option value="Kids">Kids</option>
					</select>
				</div>
			</div>
			<div>
				<p className='mb-2'>Product Sizes & Prices</p>
				<div className='flex gap-3'>
					{["S", "M", "L"].map(size => (
						<div key={size} className="flex flex-col items-center">
							<div className='w-20 text-center' onClick={() => handleSizeToggle(size)}>
								<p className={`px-3 py-1 cursor-pointer ${sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"}`}>{size}</p>
							</div>
							{sizes.includes(size) && (
								<input
									type="number"
									placeholder={`Price for ${size}`}
									value={sizePrices[size]}
									onChange={(e) => handleSizePriceChange(size, e.target.value)}
									className="w-18 mt-2 px-2 py-1 border"
									required
								/>
							)}
						</div>
					))}
				</div>
			</div>
			<div className='flex gap-2 mt-2'>
				<input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
				<label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
			</div>
			<button className='w-28 py-3 mt-4 bg-black text-white' type='submit'> {loading ? "ADDING..." : "ADD"}</button>
		</form>
	)
}

export default Add
