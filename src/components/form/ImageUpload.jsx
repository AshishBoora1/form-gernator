import fileUpload from "../../../public/image.png";

const ImageUpload = ({ image, onChange }) => {
  return (
    <div className="flex justify-center items-center pb-3 pt-8">
      <label className="block mt-4 border-2 border-dashed p-6 text-center cursor-pointer">
        <input type="file" hidden onChange={onChange} />
        <img
          src={image ? URL.createObjectURL(image) : fileUpload}
          alt="upload"
          className={`mx-auto ${image ? "h-40 w-40" : "h-16 w-16 opacity-50"}`}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
