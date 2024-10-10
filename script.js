function getUnitValue(value, unit) {
    return unit === 'cm' ? value / 100 : value;
}

function calculateVolumeAndPrice() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let lengthUnit = document.getElementById('lengthUnit').value;
    let widthUnit = document.getElementById('widthUnit').value;
    let heightUnit = document.getElementById('heightUnit').value;
    let pricePerCubicMeter = document.getElementById('price').value;

    if (length && width && height && pricePerCubicMeter) {
        length = getUnitValue(length, lengthUnit);
        width = getUnitValue(width, widthUnit);
        height = getUnitValue(height, heightUnit);

        let volume = length * width * height;
        let price = volume * pricePerCubicMeter;

        document.getElementById('result').textContent = 'حجم المكعب: ' + volume + ' متر مكعب | السعر: ' + price + ' ليرة ';
    } else {
        document.getElementById('result').textContent = 'يرجى إدخال كافة الأبعاد والسعر.';
    }
}

