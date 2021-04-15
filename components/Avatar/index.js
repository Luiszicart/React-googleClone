function Avatar({url}) {
  return (
    <div>
      <img loading="lazy"
        className="h-10 rounded-full
        cursor-pointer transition duration-150
        transform hover:scale-110"
        src={url}
        alt="profile pic"
      />
    </div>
  )
}

export default Avatar

