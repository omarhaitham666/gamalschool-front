// import React, { useState } from 'react';
// import API from '../../../Services/Api';
// import '../Team/TeamCreateStyle.css';

// function TeamCreate({ onTeamCreate }) {
//   const [form, setForm] = useState({
//     name: '',
//     position: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       setForm({ ...form, image: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', form.name);
//     formData.append('position', form.position);
//     if (form.image) {
//       formData.append('image', form.image);
//     }

//     try {
//       await API.post('api/teams', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       onTeamCreate();
//       setForm({ name: '', position: '', image: null });
//     } catch (error) {
//       console.error('Error adding team:', error);
//     }
//   };

//   return (
//     <div className='add-team'>
//       <h2>إضافة عضو جديد</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="الاسم"
//           required
//         />
//         <input
//           type="text"
//           name="position"
//           value={form.position}
//           onChange={handleChange}
//           placeholder="العنوان"
//           required
//         />
//         <input
//           type="file"
//           name="pic"
//           onChange={handleChange}
//           accept="image/*"
//         />
//         <button type="submit" className='btn add-button'>إضافة</button>
//       </form>
//     </div>
//   );
// }

// export default TeamCreate;


import React, { useState } from 'react';
import API from '../../../Services/Api';
import '../Team/TeamCreateStyle.css';

function TeamCreate({ onTeamCreate }) {
  const [form, setForm] = useState({
    name: '',
    title: '',
    pic: null,  
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'pic') { // تم تغيير 'image' إلى 'pic'
      setForm({ ...form, pic: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('title', form.title); // تم تغيير 'position' إلى 'title'
    if (form.pic) {
      formData.append('pic', form.pic); // تم تغيير 'image' إلى 'pic'
    }

    try {
      await API.post('api/teams', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onTeamCreate();
      setForm({ name: '', title: '', pic: null }); // تم تغيير 'position' إلى 'title' و 'image' إلى 'pic'
    } catch (error) {
      console.error('Error adding team:', error);
      alert('حدث خطأ أثناء إضافة العضو. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <div className='add-team'>
      <h2>إضافة عضو جديد</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="الاسم"
          required
        />
        <input
          type="text"
          name="title" // تم تغيير 'position' إلى 'title'
          value={form.title}
          onChange={handleChange}
          placeholder="العنوان"
          required
        />
        <input
          type="file"
          name="pic" // تم تغيير 'image' إلى 'pic'
          onChange={handleChange}
          accept="image/*"
        />
        <button type="submit" className='btn add-button'>إضافة</button>
      </form>
    </div>
  );
}

export default TeamCreate;

