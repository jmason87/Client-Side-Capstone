import { render } from "@testing-library/react"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const Reviews = () => {
    const [locations, setLocations] = useState([])
    const [reviewsForList, setReviewsForList] = useState([])
    const [addReview, updateReviews] = useState([])
    const [review, setReview] = useState({
        locationId: 0,
        post: ""
    })
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/reviews")
                .then(res => res.json())
                .then((data) => {
                    setReviewsForList(data)
                })
        },
        [addReview]
    )


    const submitNewReview = () => {
        //e.preventDefault()
        const blankForm = {
            locationId: 0,
            post: ""
            }
        const newReview = {
            locationId: parseInt(review.locationId),
            userId: parseInt(localStorage.getItem("pub_user")),
            post: review.post
        }

        if (newReview.locationId === 0) {
            window.alert("Please select a location")
        } else  if (newReview.post === "") {
            window.alert("Please fill out the review form")
        } else {

        const fetchOption = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        }

        return fetch("http://localhost:8088/reviews", fetchOption)
            .then(res => res.json())
            .then((data) => {
                updateReviews(data)
            })
            .then(() => {
                document.getElementById("reviewForm").reset()
            })
            .then(() => {
                setReview(blankForm)
            })
    }}

    const deleteReview = (id) => {
        fetch(`http://localhost:8088/reviews/${id}`, {
            method: "DELETE"
        })
        .then ((data) => {
            updateReviews(data)
        })
    }

    const editReview = (id) => {
        const blankForm = {
            locationId: 0,
            post: ""
        }
        const editedReviewObj = {
            locationId: parseInt(review.locationId),
            userId: parseInt(localStorage.getItem("pub_user")),
            post: review.post
        }

        if (editedReviewObj.locationId === 0) {
            window.alert("Please select a location")
        } else if (editedReviewObj.post === "") {
            window.alert ("Please edit your review")
        } else {

        return fetch(`http://localhost:8088/reviews/${id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(editedReviewObj)
        })
        .then ((data) => {
            updateReviews(data)
        })
        .then(() => {
            document.getElementById("reviewForm").reset()
        })
        .then(() => {
            setReview(blankForm)
        })




    }}

    return (
        <>
            <h1>Reviews</h1>
            <form id="reviewForm">
                <select
                    onChange={
                        (evt) => {
                            const copy = { ...review }
                            copy.locationId = evt.target.value
                            setReview(copy)
                        }
                    }>
                    <option value="" >Select a Location</option>
                    {
                        locations.map(location => {
                            return <option key={location.id} value={location.id}>{location.neighborhood}</option>
                        })
                    }
                </select>

                <div>
                    <input
                        type="text"
                        placeholder="Leave a Review"
                        onChange={
                            (evt) => {
                                const copy = { ...review }
                                copy.post = evt.target.value
                                setReview(copy)
                            }
                        } />
                </div>
            </form>

            <button onClick={submitNewReview}>Submit</button>


            {
                reviewsForList.map(
                    (reviewListObj) => {
                        if (reviewListObj.userId === parseInt(localStorage.getItem("pub_user"))) {
                            return <div>
                                {reviewListObj.post}
                                <button onClick={() => {
                                    deleteReview(reviewListObj.id)
                                }
                                }>Delete</button>
                                <button onClick={() => {
                                    editReview(reviewListObj.id)
                                }
                                }>Edit</button>
                            </div>
                        } else {
                            return <div>{reviewListObj.post}</div>
                        }
                    }
                )
            }

        </>
    )
}