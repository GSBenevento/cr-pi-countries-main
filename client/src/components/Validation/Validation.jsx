const validation = (formData) => {
    const errors = {}
    const durationRegex = /^(?:[1-9]|1\d|2[0-3])$/
    const selectCountryId = event.target.value

    if(!durationRegex.test(formData.duration)){
        errors.duration =
					'The duration must be from 1 to 23 hours that has the day';
    }

    if(!formData.countryIds.include())
}