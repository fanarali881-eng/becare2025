/**
 * Vehicle API Helper
 * للتواصل مع car-bot API وجلب معلومات المركبات
 */

export interface VehicleInfo {
  SequenceNumber: string
  CustomCardNumber: string | null
  MakerAr: string
  MakerEn: string
  ModelAr: string
  ModelEn: string
  ModelYear: number
}

export interface VehicleAPIResponse {
  success: boolean
  vehicles?: VehicleInfo[]
  error?: string
}

export interface VehicleDropdownOption {
  value: string // الرقم التسلسلي
  label: string // للعرض في dropdown
  maker: string
  model: string
  year: number
}

/**
 * جلب معلومات المركبات من car-bot API
 * @param nin رقم الهوية (10 أرقام)
 * @returns معلومات المركبات أو null في حالة الفشل
 */
export async function fetchVehiclesByNIN(nin: string): Promise<VehicleInfo[] | null> {
  // التحقق من صحة رقم الهوية
  if (!nin || !/^\d{10}$/.test(nin)) {
    console.log('Invalid NIN format')
    return null
  }

  // URL الخاص بـ car-bot API
  const API_URL = process.env.NEXT_PUBLIC_VEHICLE_API_URL || 
                  'https://5000-ipvh1dwunrykwv8injvdx-16b1da07.manus-asia.computer/api/vehicles'

  // إنشاء AbortController للـ timeout
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 ثواني

  try {
    const response = await fetch(`${API_URL}?nin=${nin}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      // عدم cache للحصول على بيانات حديثة
      cache: 'no-store'
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      console.log(`Vehicle API returned status: ${response.status}`)
      return null
    }

    const data: VehicleAPIResponse = await response.json()

    if (data.success && data.vehicles && data.vehicles.length > 0) {
      console.log(`✅ Found ${data.vehicles.length} vehicles for NIN: ${nin}`)
      return data.vehicles
    } else {
      console.log('No vehicles found for this NIN')
      return null
    }

  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.log('Vehicle API timeout - using manual entry')
      } else {
        console.log('Vehicle API error:', error.message)
      }
    }

    // Fail gracefully - لا تؤثر على الموقع
    return null
  }
}

/**
 * تحويل معلومات المركبات إلى خيارات dropdown
 * @param vehicles قائمة المركبات
 * @returns خيارات للـ dropdown
 */
export function vehiclesToDropdownOptions(vehicles: VehicleInfo[]): VehicleDropdownOption[] {
  return vehicles.map(vehicle => ({
    value: vehicle.SequenceNumber,
    label: `${vehicle.SequenceNumber} - ${vehicle.MakerAr} ${vehicle.ModelAr}`,
    maker: vehicle.MakerAr,
    model: vehicle.ModelAr,
    year: vehicle.ModelYear
  }))
}

/**
 * حفظ معلومات المركبة المختارة في localStorage
 * @param vehicle معلومات المركبة
 */
export function saveSelectedVehicle(vehicle: VehicleDropdownOption): void {
  try {
    localStorage.setItem('selectedVehicle', JSON.stringify({
      maker: vehicle.maker,
      model: vehicle.model,
      year: vehicle.year,
      sequenceNumber: vehicle.value,
      timestamp: new Date().toISOString()
    }))
  } catch (error) {
    console.error('Error saving vehicle to localStorage:', error)
  }
}

/**
 * استرجاع معلومات المركبة المحفوظة من localStorage
 * @returns معلومات المركبة أو null
 */
export function getSelectedVehicle(): {
  maker: string
  model: string
  year: number
  sequenceNumber: string
  timestamp: string
} | null {
  try {
    const saved = localStorage.getItem('selectedVehicle')
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error reading vehicle from localStorage:', error)
  }
  return null
}

/**
 * مسح معلومات المركبة المحفوظة
 */
export function clearSelectedVehicle(): void {
  try {
    localStorage.removeItem('selectedVehicle')
  } catch (error) {
    console.error('Error clearing vehicle from localStorage:', error)
  }
}
