/**
 * Fungsi untuk mengecek nilai
 * @param {Array} grades nilai yang akan di cek
 * @throws {Error} jika nilai tidak berupa angka
 */
function checkGrade(grades) {
    // Looping untuk mengecek setiap nilai
    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] !== 'number') {
            // Jika nilai tidak berupa angka maka throw error
            throw new Error('grade harus berupa angka');
        }
        // Mengambil nilai yang akan di cek
        const grade = grades[i];

        // Inisialisasi variabel untuk menampung hasil predicate
        let predicate;

        // Jika nilai >= 80 maka predicate adalah A
        if (grade >= 80) {
            predicate = 'A';
        } 
        // Jika nilai >= 70 maka predicate adalah B
        else if (grade >= 70) {
            predicate = 'B';
        } 
        // Jika nilai >= 60 maka predicate adalah C
        else if (grade >= 60) {
            predicate = 'C';
        } 
        // Jika nilai < 60 maka predicate adalah D
        else {
            predicate = 'D';
        }

        // Menampilkan hasil
        console.log(`graded is ${i + 1} = ${grade} = ${predicate}`);
    }
}

try {
    // Contoh data nilai
    const grades = [90, 70, 60, 50];
    checkGrade(grades);
} catch (error) {
    // Jika terjadi error maka menampilkan error
    console.log(error);
}


