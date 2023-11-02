import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../components/CheckBox";
import ImageCardComponent from "../components/ImageCardComponent";
import { deleteImage, resetSelectImage } from "../redux/ImageGallarySlice/imageGallerySlice";

export default function ImageGallery() {
  const { imagesList } = useSelector((state) => state.imageGallery);
  const dispatch = useDispatch();
  return (
    <section className="p-4 md:p-8">
      <div className="max-w-[1440px] mx-auto">
        {/*------------------- header start-------------------- */}
        <div className="header_container">
          {imagesList.filter((image) => image.select).length > 0 ? (
            <div className="flex gap-2 items-center">
              <CheckBox
                name="all_select"
                checked={true}
                onChange={() => {
                  dispatch(resetSelectImage());
                }}
              />
              <span className="font-medium">
                {imagesList.filter((image) => image.select).length} File
                {imagesList.filter((image) => image.select).length > 1
                  ? "s "
                  : " "}
                Selected
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <span className="text-lg font-bold">Gallery</span>
            </div>
          )}

          {imagesList.filter((image) => image.select).length > 0 && (
            <div>
              <span
                className="text-[#ff2600] font-medium cursor-pointer"
                onClick={() => {
                  dispatch(deleteImage());
                }}
              >
                Delete File
                {imagesList.filter((image) => image.select).length > 1
                  ? "s"
                  : ""}
              </span>
            </div>
          )}
        </div>
        {/*------------------- header end-------------------- */}

        {/*-------------------- image gallery body start ----------- */}
        <div className="image_body_container">
          <div className="image_gallery_body">
            {imagesList?.map((image, index) => {
              return (
                <div
                  key={image.id}
                  className={`image_container${
                    index === 0 ? " featured_image" : ""
                  }`}
                >
                  <ImageCardComponent key={image.id} image={image} index={index} />
                </div>
              );
            })}
            <div className="add_image_card">
              <img
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
                alt=""
                className="w-8 h-8"
              />
              <span>Add Images</span>
            </div>
          </div>
        </div>
        {/*-------------------- image gallery body start----------- */}
      </div>
    </section>
  );
}
