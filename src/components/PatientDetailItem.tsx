// * fca -> Para generer plantilla basica de componente

type PatientDetailItemProp = {
  label: string,
  data: string
}

export default function PatientDetailItem({label, data}: PatientDetailItemProp) {
  return (
    <>
      <p className="font-bold mb-3 text-gray-700 uppercase"> {label}{' '}
          <span className="font-normal normal-case">{data}</span>
      </p>
    </>
  )
}
