const { MissingParamError } = require('../../presentation/errors')
const HttpResponse = require('../../presentation/helpers/http-response')

class AuthUseCase {
  async auth (email, password) {
    if (!email) {
      return HttpResponse.badRequest(new MissingParamError('email'))
    }

    if (!password) {
      return HttpResponse.badRequest(new MissingParamError('password'))
    }

    return 'access_token'
  }
}

const makeSut = () => {
  return new AuthUseCase()
}

describe('Auth UseCase', () => {
  test('Should return null if no email is provided', async () => {
    const sut = makeSut()

    const promise = sut.auth()
    expect(promise).rejects.toThrow()
  })

  test('Should return null if no password is provided', async () => {
    const sut = makeSut()

    const promise = sut.auth('any_email@mail.com')
    expect(promise).rejects.toThrow()
  })
})