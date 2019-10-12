//DOCUMENTATION

//useForm
import { useForm } from 'react-form'
const instance = useForm(options)

//useField
import { useField } from 'react-form'
 
const fieldInstance = useField(fieldPath, options)

//useFormContext
import { useFormContext } from 'react-form'
 
function App() {
  const { Form } = useForm()
 
  return (
    <Form>
      <Stuff />
    </Form>
  )
}
 
function Stuff() {
  const formInstance = useFormContext()
 
  console.log(formInstance)
}

