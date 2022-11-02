import ctypes
import os


script_dir = os.path.abspath(os.path.dirname(__file__))
lib_path = os.path.join(script_dir, "../cFunctions/clib.so")
clib = ctypes.CDLL(lib_path)


class SortArray:
    _arr = []
    _sortOption = ''
    # private function names
    def __init__(self , listArr , sortOpt):
        self._arr = listArr
        self._sortOption = sortOpt

    # ! we should rewrite this after : because solid pattern is not applicated
    def getSortFunction(self , array , array_size):
        result = ''
        if(self._sortOption == 'bubble'):
            clib.bubble.restype = ctypes.c_float
            clib.bubble.argtypes = [ctypes.POINTER(ctypes.c_int), ctypes.c_int]
            result = clib.bubble(array , array_size)

        if(self._sortOption == 'selection'):

            clib.selection.restype = ctypes.c_float
            clib.selection.argtypes = [ctypes.POINTER(ctypes.c_int), ctypes.c_int]

            result =  clib.selection(array , array_size)
        if(self._sortOption == 'insertion'):

            clib.insertion.restype = ctypes.c_float
            clib.insertion.argtypes = [ctypes.POINTER(ctypes.c_int), ctypes.c_int]
            result =  clib.insertion(array , array_size)

        return result
        
    # sort function
    def sortFunc(self):
        self._arr = (ctypes.c_int * len(self._arr))(*self._arr) 
        result = self.getSortFunction(self._arr , len(self._arr))
        return [list(self._arr) , result]