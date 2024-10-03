# logger

Logger class to parse and enhance console logs with additional information.
This class provides methods to log messages with different severity levels(info, warn, error, log) and appends useful metadata such as timestamp and memory usage at the time of logging.


# Descripción

## Métodos de registro: 

La clase proporciona métodos estáticos (info, warn, error, log) para registrar mensajes con diferentes niveles de severidad.

## Método

Este método privado se encarga de formatear y registrar el mensaje, añadiendo un timestamp y el uso de memoria en el momento del registro.

## Uso de memoria:

Utiliza process.memoryUsage() para obtener el uso de memoria del backend y lo incluye en el log.
