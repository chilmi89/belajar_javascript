class Qeueue:
    def __init__(self, n):
        print(f"sebuah queue di tambahkan dengan kapasitas {n}")
        self.size = n
        self.current_size = 0
        self.data = []

    def is_empty(self):
        return self.current_size == 0

    def is_full(self):
        return self.current_size == self.size

    def enqueue(self, new_Data):
        if self.is_full():
            print(f"queue penuh, {new_Data} tidak ditambahkan")

        else:
            self.data.append(new_Data)
            self.current_size = len(self.data)
            print(f"menambahkan {new_Data} diantrikan ke dalam queue")

    def dequeue(self):
        if self.is_empty():
            print("queue masih kosong , data tidak dapat di diqueue")
        else:
            data_keluar = self.data.pop(0)
            self.current_size = len(self.data)
            print(f"{data_keluar} => keluar dari antrian")
    def print_info(self):

        print("-" * 30)
        print(f"INFO antrian")
        print("-" * 30)
        print(f"jumlah antrian: {self.size}")
        print(f"Banyak elemen dalam antrian = {self.current_size}")

        if self.is_empty():
            print("Data  terdepan: -")
            print("Data  paling belakang: -")
        else:
            print(f"Data  terdepan: {self.data[0]}")
            print(f"Data  paling belakang: {self.data[self.current_size - 1]}")

        print(f"Isi antrian = {self.data}")
        print("-" * 30)
    def visualisasi_antrian(self):
        print("visualisasi antrian")
        for i in range(self.size):
            print(f"        [{self.size-i}]     ", end = "")
        print()

        for i  in range(self.size):
            print("------------------", end = "")
        print()
        jumlahposisikosong = self.size - self.current_size
        for i in range(self.size):
            if i < jumlahposisikosong:
                print(f" %10s "% ("kosong"), end = "")
            else:
                print(f" %10s "% (self.data[self.size - i - 1]), end = "")
        
        print(">>> [depan], ", end = "")
        print() 
        for i in range(self.size):
            print("------------------", end = "")
        print("")





Q1 = Qeueue(4)
print(Q1.data)
Q1.enqueue("andi")
Q1.enqueue("ahmad")
Q1.enqueue("satrio")
Q1.enqueue("afrizal")
Q1.enqueue("sukron")
Q1.enqueue("mahmud")


while not Q1.is_empty():
    Q1.dequeue()
    Q1.visualisasi_antrian()


