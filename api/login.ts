import { Login, Otp } from '@/types'

const baseUrl = 'https://test.backend.urbanoinfotech.com/api/v1'

export async function OtpPost(contact_number: Otp['contact_number']) {
  try {
    const response = await fetch(`${baseUrl}/send-otp`, {
      method: 'POST',
      body: JSON.stringify({ contact_number }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const jsonResponse = await response.json()
    console.log('jsonResponse', jsonResponse)

    if (!response.ok) {
      throw new Error(jsonResponse.message || 'Failed to send OTP')
    }

    return jsonResponse
  } catch (error) {
    console.error('Error sending OTP:', error)
    throw error
  }
}

//pandit-login

export async function panditLogin({ contact_number, otp }: Login) {
  try {
    const response = await fetch(`${baseUrl}/pandit-login`, {
      method: 'POST',
      body: JSON.stringify({ contact_number, otp }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const jsonResponse = await response.json() // Parse the response
    console.log('jsonResponse', jsonResponse)

    if (!response.ok) {
      throw new Error(jsonResponse.message || 'Failed to send OTP')
    }

    return jsonResponse
  } catch (error) {
    console.error('Error sending OTP:', error)
    throw error
  }
}
