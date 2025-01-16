import commonAPI from './commonAPI'
import SERVER_URL from './serverUrl'

// uploadVideo api - api call by Add Component
export const uploadVideoAPI = async (video) =>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// getAllVideoAPI - called by View component
export const getAllVideoAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,'')
}
// SaveHistory API - called by videocard
export const SaveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

// getHistoryAPI - called by History
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,'')
}

// removeHistory APi - called by History

export const removeHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// removeVideoAPI - called by VideoCard
export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// addCategoryAPI - called by Category
export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

// getAllCategoryAPI - called by Category
export const getAllCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,'')
}

// removeCategoryAPI - called by category
export const removeCategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}

// getsingleVideoAPI - called by category
export const getSingleVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`)
}

// updateCategoryAPI - called by category
export const updateCategoryAPI = async (categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId }`,updateCategoryDetails)
}

// getSingleCategoryAPI - called by view
export const getSingleCategoryAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${id}`,"")
}