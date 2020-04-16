import { RequireFieldValidation } from './require-field-validation'
import { MissingParamError } from '../../presentation/errors'

const makeSut = (): RequireFieldValidation => {
  return new RequireFieldValidation('field')
}

describe('RequireField Validation', () => {
  test('Should return a MissingParamError fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation fails successeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
