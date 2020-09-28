const Guest = ({ guest, guestLinkedIn }) => {
  return (
    <>
      {guestLinkedIn ? (
        <a href={guestLinkedIn} className="hover:text-brand-yellow duration-150 ease-in transform font-bold">
          {guest}
        </a>
      ) : (
        {guest}
      )}
    </>
  )
}

export default Guest
