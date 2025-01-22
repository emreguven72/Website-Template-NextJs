import GoogleSheetTable from '@/components/GoogleSheetTable';
import React from 'react'

const EducationCalender = () => {
  return (
    <section className="flex flex-col gap-10 px-8 md:px-20 py-10">
      <h1 className="text-2xl text-lovechemred-500 text-center">Takvim</h1>
      <GoogleSheetTable url="https://docs.google.com/spreadsheets/d/1QELcSR1-C4CugbxqmszGMQRpM8RQ4a60oU25-4y6iM4/preview" />
    </section>
  )
}

export default EducationCalender;