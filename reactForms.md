# This helps the newbies by providing them a basic and a easy idea about  react forms 

![RESOURCES](https://www.npmjs.com/package/react-form#installation)

## INSTALLATION
```sh
#for yarn
$ yarn add react-form
# or 
#for react
$ npm i react-form --save
```

## DOCUMENTATION
useForm
#check the js file

## VALIDATION

Validation in React Form supports validation both individual fields and the entire form.

A form submission can be attempted when either:

    a.The form has not been touched !instance.meta.isTouched

OR

    b.All fields with a validation option
        1.Have been touched (field.meta.isTouched)
        2.Are not validating (!field.meta.isValidating)
        3.Do not have an error (field.meta.error)
    The form has been touched instance.meta.isTouched
    The form is not validating !instance.meta.isValidating
    The form does not have an error instance.meta.error

1.Synchronous Validation
  
    If you don't need to perform any async validation in your form or field, you can just return an error string directly (or false clear an error):

    If a validation function returns a string, the value returned will be stored in either the form's instance.meta.error or the field's meta.error value
    If a validation function returns false, the error in either the form's instance.meta.error or the field's meta.error value the will be set to null
    if a validation function returns undefined, no changes will happen

2.Asynchronous Validation

Asynchronous validation is as easy as returning a promise that resolves to the standard return types shown above in the sy
nchronous validation example:
 #const options = {
 # validate: async value => {
  #  const error = await validateOnServer(values)
  #  if (error) {
 #     return error
 #   }
 #   return false
 # },
# }

3.Mixed Sync + Async Validation:
