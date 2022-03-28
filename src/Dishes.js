import { useState, useEffect } from 'react';
import axios from 'axios';
const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [edit, setEdit] = useState(false);
  const [updateDish, setUpdateDish] = useState({});
  const [category, setCategory] = useState([]);
  const getDishes = () => {
    axios
      .get('/dishes')
      .then((res) => {
        setDishes(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCategories = () => {
    axios
      .get('/category')
      .then((res) => {
        setCategory(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDishes();
    getCategories();
  }, []);
  const createDish = (event) => {
    event.preventDefault();
    const dishObject = {
      id: event.target.id.value,
      name: event.target.name.value,
      description: event.target.description.value,
      cid: event.target.cid.value,
      price: event.target.price.value,
    };
    axios
      .post('/dishes', dishObject)
      .then((res) => {
        getDishes();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteDish = (id) => {
    axios
      .delete('dishes/' + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getDishes();
  };
  const deleteAll = () => {
    axios
      .get('/dishes/deleteall')
      .then((res) => {
        getDishes();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editDish = (id) => {
    setEdit(true);
    setUpdateDish(id);
  };
  const saveDish = (event) => {
    event.preventDefault();
    const dishObject = {
      name: event.target.name.value,
      description: event.target.description.value,
      cid: event.target.cid.value,
      price: event.target.price.value,
    };
    axios.put(`/dishes/${updateDish}`, dishObject).then((res) => {
      getDishes();
      setEdit(false);
      console.log(res.data);
    });
  };
  return (
    <div>
      {edit ? (
        <div>
          <h1>Update Dish</h1>
          <form className='todo' onSubmit={saveDish}>
            <h3>Dish Name : </h3>
            <input type='text' name='name' placeholder='Enter Category Name' />
            <br />
            <h3 className='subHeading'>Price : </h3>
            <input type='number' name='price' placeholder='Enter Price' />
            <br />
            <h3 className='subHeading'>Description : </h3>
            <textarea name='description' />
            <br />
            <h3>Select Category : </h3>
            <select name='cid'>
              <option selected>Select</option>
              {category.map((val) => {
                return <option value={val.id}>{val.name}</option>;
              })}
            </select>
            <br />
            <button className='btn btn-outline-primary'>
              <h3>Update Dish</h3>
            </button>
            <br />
          </form>
        </div>
      ) : (
        <div>
          <h1 className='mt-3'>Dishes</h1>
          <form className='todo' onSubmit={createDish}>
            <h3>Dish Id : </h3>
            <input type='number' name='id' placeholder='Enter Category Id' />
            <br />
            <h3 className='subHeading'>Dish Name : </h3>
            <input type='text' name='name' placeholder='Enter Category Name' />
            <br />
            <h3 className='subHeading'>Price : </h3>
            <input type='number' name='price' placeholder='Enter Price' />
            <br />
            <h3 className='subHeading'>Description : </h3>
            <textarea name='description' />
            <br />
            <h3>Select Category : </h3>
            <select name='cid'>
              <option selected>Select</option>
              {category.map((val) => {
                return <option value={val.id}>{val.name}</option>;
              })}
            </select>
            <br />
            <button>
              <b>Add Dish</b>
            </button>
            <br />
          </form>
          <button className='delAll' onClick={deleteAll}>
            <b>Delete All</b>
          </button>
          <br />
        </div>
      )}
      <div className='table table-bordered table-striped text-center'>
        <table className='text-center '>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category Id</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          {dishes.map((val, index) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.description}</td>
                <td>{val.cid}</td>
                <td>
                  <button
                    className='delAll'
                    onClick={() => {
                      deleteDish(val.id);
                    }}
                  >
                    <b> Delete</b>
                  </button>
                  <br />
                </td>
                <td>
                  <button
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      editDish(val.id);
                    }}
                  >
                    <b> Edit</b>
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default Dishes;
