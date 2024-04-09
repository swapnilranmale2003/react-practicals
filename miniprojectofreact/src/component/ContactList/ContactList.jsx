import React from 'react'

function ContactList({contact}) {
    console.log(contact)
    const contactList =  contact.map((val)=>{
        return(
            <div>
                <div>{val.name}</div>
                <div>{val.email}</div>

            </div>

        )
    })
  return (
    <>
    <div>
      Contact List
    </div>
   {contactList}
    </>
  )
}

export default ContactList
