import { useEffect, useState } from 'react'
import { BaseWrapper } from '../../components/BaseWrapper'
import { api } from '../../services/api'

export const AdminHomePage = () => {
  const [data, setData] = useState()

  const handleDelete = async (id: int) => {
    const originalData = data

    const newData = originalData.filter((item) => item.id !== id)
    setData(newData)

    try {
      await api.post('/admin/products/' + id.toString())
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log('This movie has already been deleted')
      setData(originalData)
    }
  }

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get('/products')
      setData(data)
      console.log(data)
    }
    getUserData()
  }, [])

  return (
    <BaseWrapper>
      <h1>Products</h1>
      {data && (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' key='id'>
                Id
              </th>
              <th scope='col' key='title'>
                Title
              </th>
              <th scope='col' key='description'>
                Description
              </th>
              <th scope='col' key='price'>
                Price
              </th>
              <th scope='col' key='quantity'>
                Quantity
              </th>
              <th scope='col' key='slug'>
                Slug
              </th>
              <th scope='col' key='category'>
                Category
              </th>
              <th scope='col' key='image'>
                Image
              </th>
              <th scope='col' key='delete'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope='row' key={item.id.toString() + 'id'}>
                  {item.id}
                </th>
                <td key={item.id.toString() + 'title'}>{item.title}</td>
                <td key={item.id.toString() + 'description'}>
                  {item.description}
                </td>
                <td key={item.id.toString() + 'price'}>{item.price}</td>
                <td key={item.id.toString() + 'quantity'}>{item.quantity}</td>
                <td key={item.id.toString() + 'slug'}>{item.slug}</td>
                <td key={item.id.toString() + 'category'}>{item.category}</td>
                <td key={item.id.toString() + 'image'}>{item.image}</td>
                <td key={item.id.toString() + 'delete'}>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </BaseWrapper>
  )
}
