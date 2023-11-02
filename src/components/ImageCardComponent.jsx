import { useState } from "react";
// import CheckBox from "../Forms/CheckBox";
import CheckBox from "../components/CheckBox";
import { useDispatch } from "react-redux";
// import { selectImage, setDragId, setDropId } from "../../../redux/ImageGallarySlice/imageGallerySlice";
import { selectImage, setDragId, setDropId } from "../redux/ImageGallarySlice/imageGallerySlice";


export default function ImageCardComponent({ image,index }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const dispatch = useDispatch();

  // ----------------drag and drop functionality start------------
  function dragStart(e) {
    const id = e.target.id;
    dispatch(setDragId({ id }));
  }

  function onDrop(e) {
    if (
      e.target.classList[0] === "image" ||
      e.target.classList[0] === "checkbox_input" ||
      e.target.classList[0] === "hover_overlay"
    ) {
      const id = e.target.parentNode.id;
      dispatch(setDropId({ id }));
    }
  }
  // ----------------drag and drop functionality end------------

  // select image
  function selectThisImage() {
    dispatch(selectImage({ index: image.id }));
  }

  return (
    <div
      className="image_card"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      id={`${image.id}`}
      draggable="true"
      onDragStart={(e) => {
        dragStart(e);
      }}
      onDrop={(e) => {
        onDrop(e);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <img src={image?.path} className="image w-full h-full" alt="" />

      {(showOverlay || image.select) && (
        <>
          <div
            className={
              image.select
                ? "hover_overlay selected_image"
                : "hover_overlay hover_image"
            }
          ></div>

          <CheckBox
            onChange={selectThisImage}
            name={`checkbox-${image.id}`}
            className="checkbox_input absolute top-6 left-6 z-30"
            checked={image.select ? true : false}
          />
        </>
      )}
    </div>
  );
}
